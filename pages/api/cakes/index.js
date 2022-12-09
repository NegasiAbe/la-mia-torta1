import cakeController from '../../../controllers/cakeController'
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
    if (req.method === "POST") {
        // TODO take the title and description from the request body
  
        console.log('the request from the form', req.body)
        const UserId = 1
        const cake = await cakeController.create(UserId, req.body)
        res.status(200).redirect(`/baker`);
    }
    // the redirect metod sends the user to the specified path
}