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
                <label htmlFor="first_name" style={{backgroundColor:'white', border:'inset', margin:'2px'}}>First Name - </label>
                <input type="text" name="first_name" style={{border:'outset', margin:'2px'}}/><br></br>

                <label htmlFor="last_name" style={{backgroundColor:'white', border:'inset', margin:'2px'}}>Last Name - </label>
                <input type="text" name="last_name" style={{border:'outset', margin:'2px'}} /><br></br>

                <label htmlFor="email" style={{backgroundColor:'white', border:'inset', margin:'2px'}}>Email - </label>
                <input type="email" name="email" style={{border:'outset', margin:'2px'}} /><br></br>
                
                <label htmlFor="mobile" style={{backgroundColor:'white', border:'inset', margin:'2px'}}>Mobile - </label>
                <input type="mobile" name="mobile" style={{border:'outset', margin:'2px'}} /><br></br>
                <button type="submit" style={{border:'solid', borderRadius: '10px', margin:'2px', backgroundColor:'white'}}>Sumbmit</button>
            </Form>
            {actionData != undefined && actionData ? <h6>Name submit successfully</h6>: actionData != undefined && !actionData ?<h6>Name is not submited</h6>: <></>}
        </div>
    )
}