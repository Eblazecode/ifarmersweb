// src/components/Gallery.tsx
import React, { useState, useEffect, useCallback } from "react";
import { X, ArrowLeft, ArrowRight } from "lucide-react";

export type ImageItem = {
    src: string;
    alt: string;
    caption?: string;
    tag?: string;
};

type GalleryProps = {
    images?: ImageItem[];
    initialFilter?: string;
    className?: string;
};

const defaultImages: ImageItem[] = [];

const Gallery: React.FC<GalleryProps> = ({
                                             images = defaultImages,
                                             initialFilter = "all",
                                             className = "",
                                         }) => {
    const [filter, setFilter] = useState<string>(initialFilter);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const tags = Array.from(
        new Set(images.map((i) => (i.tag || "other").toLowerCase()))
    );
    const uniqueTags = ["all", ...tags];
    const filtered = images.filter(
        (img) => filter === "all" || (img.tag || "").toLowerCase() === filter
    );

    const openAt = (index: number) => setSelectedIndex(index);
    const close = () => setSelectedIndex(null);

    const showPrev = useCallback(() => {
        if (selectedIndex === null) return;
        setSelectedIndex((prev) =>
            prev === null ? null : (prev - 1 + filtered.length) % filtered.length
        );
    }, [selectedIndex, filtered.length]);

    const showNext = useCallback(() => {
        if (selectedIndex === null) return;
        setSelectedIndex((prev) =>
            prev === null ? null : (prev + 1) % filtered.length
        );
    }, [selectedIndex, filtered.length]);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (selectedIndex === null) return;
            if (e.key === "Escape") close();
            if (e.key === "ArrowLeft") showPrev();
            if (e.key === "ArrowRight") showNext();
        };

        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [selectedIndex, showPrev, showNext]);

    useEffect(() => {
        setSelectedIndex(null);
    }, [filter]);

    return (
        <section
            className={`gallery-component max-w-7xl mx-auto px-6 py-16 ${className}`}
        >
            {/* HEADER */}
            <header className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-6">
                <div>
                    <h2 className="text-3xl font-bold text-[#2D5016]">Gallery</h2>
                    <p className="text-sm text-gray-600 mt-2">
                        Explore our projects, field activities & farmer experiences.
                    </p>
                </div>

                {/* FILTER CHIPS */}
                <div className="flex flex-wrap gap-3">
                    {uniqueTags.map((t) => (
                        <button
                            key={t}
                            onClick={() => setFilter(t)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                                filter === t
                                    ? "bg-[#7CB342] text-white shadow"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                        >
                            {t === "all" ? "All" : t.charAt(0).toUpperCase() + t.slice(1)}
                        </button>
                    ))}
                </div>
            </header>

            {/* BIGGER GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filtered.map((img, i) => (
                    <button
                        key={i}
                        onClick={() => openAt(i)}
                        className="relative rounded-xl overflow-hidden focus:outline-none group shadow-md"
                    >
                        <img
                            src={img.src}
                            alt={img.alt}
                            loading="lazy"
                            className="w-full aspect-[4/3] object-cover transform transition duration-500 group-hover:scale-105"
                        />

                        {/* CAPTION OVERLAY */}
                        <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                            <div className="bg-black/50 px-3 py-2 rounded text-white text-sm mb-3">
                                {img.caption ?? img.alt}
                            </div>
                        </div>

                        {img.tag && (
                            <span className="absolute left-3 bottom-3 text-xs bg-white/80 px-2 py-0.5 rounded">
                {img.tag}
              </span>
                        )}
                    </button>
                ))}
            </div>

            {/* LIGHTBOX */}
            {selectedIndex !== null && filtered[selectedIndex] && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-6"
                    onClick={close}
                >
                    <div
                        className="relative w-full max-w-5xl mx-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* CLOSE */}
                        <button
                            onClick={close}
                            className="absolute top-4 right-4 bg-white/90 rounded-full p-3 hover:bg-white shadow"
                        >
                            <X className="h-6 w-6 text-[#2D5016]" />
                        </button>

                        {/* PREV */}
                        <button
                            onClick={showPrev}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-3 hover:bg-white shadow"
                        >
                            <ArrowLeft className="h-6 w-6 text-[#2D5016]" />
                        </button>

                        {/* NEXT */}
                        <button
                            onClick={showNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-3 hover:bg-white shadow"
                        >
                            <ArrowRight className="h-6 w-6 text-[#2D5016]" />
                        </button>

                        <div className="rounded-xl bg-white overflow-hidden shadow-lg">
                            <div className="w-full bg-black flex items-center justify-center p-8">
                                <img
                                    src={filtered[selectedIndex].src}
                                    alt={filtered[selectedIndex].alt}
                                    className="max-h-[75vh] object-contain rounded-lg"
                                />
                            </div>

                            <div className="p-6 flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold text-[#2D5016]">
                                        {filtered[selectedIndex].caption ??
                                            filtered[selectedIndex].alt}
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-1">
                                        {filtered[selectedIndex].alt}
                                    </p>
                                </div>

                                <span className="text-sm text-gray-700">
                  {selectedIndex + 1} / {filtered.length}
                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <p className="mt-6 text-center text-sm text-gray-400">
                Tip: Use ← → keys to navigate, Esc to close.
            </p>
        </section>
    );
};

export default Gallery;
