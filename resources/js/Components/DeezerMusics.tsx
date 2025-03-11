type DeezerMusicsProps = {
    type: string,
    id: string,
    className?: string
}

export const DeezerMusics = (props: DeezerMusicsProps) => {
    return (
        <iframe className={props.className} title="deezer-widget" src={"https://widget.deezer.com/widget/auto/" +
            props.type + "/" + props.id} width="400" height="300" allow="encrypted-media; clipboard-write"></iframe>
    )
}