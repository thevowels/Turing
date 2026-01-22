type GreetingProps = {
    message: string;
}
export default function Greeting({message}:GreetingProps) {
    return(
        <div>
            Hello! {message.toUpperCase()}
        </div>
    )
}