import { ActionFunctionArgs } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";

export async function action({request}:ActionFunctionArgs){
    const body = await request.formData();
    console.log(body, 'body');
    let toReturn = true
    return toReturn;
}

export default function signup(){
    let actionData = useActionData()
    console.log(actionData, ' actionData')
    return (
        <div  style={{backgroundColor: 'red'}}>
            <h1>
                Welcome to Signup Page.
            </h1>
            <Form method="post">
                <input type="name" name="name"/><br></br>
                <button type="submit">Sumbmit</button>
            </Form>
            {actionData != undefined && actionData ? <h6>Name submit successfully</h6>: actionData != undefined && !actionData ?<h6>Name is not submited</h6>: <></>}
        </div>
    )
}