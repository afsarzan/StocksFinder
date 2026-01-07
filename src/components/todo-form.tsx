import { FormEvent, useRef, useState } from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { PlusIcon } from "lucide-react";
import { LoadingSwap } from "./ui/loading-swap";
import { z } from "zod";
import { todos } from "@/db/schema";
import { createServerFn } from "@tanstack/react-start";
import { db } from "@/db";
import { redirect } from "@tanstack/react-router";

const addTodo = createServerFn( { method: 'POST'})
    .inputValidator(z.object({name: z.string().min(1)}))
    .handler( async ({data}) => {
            await db.insert(todos).values({...data, isComplete: false})
           throw redirect({ to: '/'})
     })



export function TodoForm() {
    const nameRef  = useRef<HTMLInputElement>(null)
    const [isLoading, setLoading] = useState(false);
    
    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        const name = nameRef.current?.value;
        if(!name) return;
        setLoading(true);
        await addTodo({data:{name}})
        setLoading(false);
        
    }
    return (
        <form onSubmit={handleSubmit}>            
            <div className="flex ">
                <Input autoFocus ref={nameRef}
                    placeholder="Enter you todo ..."
                    className="flex-1"
                    arai-label="Name"/>
                <Button type="submit" className="ml-2" disabled={isLoading}>
                    <LoadingSwap isLoading={isLoading} className="flex gap-2 items-center">
                        <PlusIcon /> Add
                    </LoadingSwap>
                </Button>
            </div>
        </form>
    )
}