type YoutubeVideoProps = {
    id: string,
    name: string,
    className?: string
}

export const YoutubeVideos = (props: YoutubeVideoProps) => {
    return (
        <div className={props.className}>
            <h2 className={"m-2 text-wrap md:text-nowrap"}>{props.name}</h2>
            <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + props.id}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className={"max-w-full"}></iframe>
        </div>
    )
}