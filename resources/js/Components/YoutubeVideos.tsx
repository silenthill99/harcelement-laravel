type YoutubeVideoProps = {
    id: string,
    name: string,
    className?: string,
    variant?: 'default' | 'card'
}

export const YoutubeVideos = (props: YoutubeVideoProps) => {
    const { id, name, className, variant = 'default' } = props;

    if (variant === 'card') {
        return (
            <div className={`group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden ${className ?? ''}`}>
                <div className="relative aspect-video">
                    <iframe
                        className="absolute inset-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${id}`}
                        title={name}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                </div>
                <div className="p-4">
                    <h3 className="font-semibold text-gray-800 group-hover:text-red-600 transition-colors line-clamp-2">
                        {name}
                    </h3>
                </div>
            </div>
        );
    }

    return (
        <div className={className}>
            <h2 className="m-2 text-wrap md:text-nowrap">{name}</h2>
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${id}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="max-w-full"
            />
        </div>
    );
}
