import { useRef } from "react"
import { Input } from "./ui/input"
export function TodoForm() {
    const nameRef  = useRef<HTMLInputElement>(null)
    return (
        <form>
            <Input autoFocus ref={nameRef}
            placeholder="Enter you todo ..."
            className="flex-1"
            arai-label="Name"/>
        </form>
    )
}