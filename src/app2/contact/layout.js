
export default function ContactLayout(props){

    console.log('layout')

    return(
        <section>
            <h1>Contact page:</h1>
            {props.children}
        </section>
    )

}