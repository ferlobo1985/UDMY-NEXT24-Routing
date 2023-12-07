export default function DashboardLayout(props){
    const condition = false;

    return(
        <>
            {props.children}
            { condition ? props.analytics : props.posts}
        </>
    )
}