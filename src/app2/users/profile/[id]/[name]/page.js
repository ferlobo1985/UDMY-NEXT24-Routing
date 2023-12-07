export default function UserNamePage({params,searchParams}){
    // console.log(params);
    // console.log(searchParams);
    return(
        <>
            <h1>{params.id} is the user ID, and the name is {params.name}</h1>
        </>
    )
}