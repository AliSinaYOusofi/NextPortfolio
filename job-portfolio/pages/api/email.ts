// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import nodemailer from 'nodemailer';
import Cors from 'cors';

const cors = Cors({
    methods: ['POST'],
});

function runMiddleware(
    req: NextApiRequest,
    res: NextApiResponse,
    fn: Function
  ) {
    return new Promise((resolve, reject) => {
      fn(req, res, (result: any) => {
        if (result instanceof Error) {
          return reject(result)
        }
  
        return resolve(result)
      })
    })
}
  


export default async function handler( req: NextApiRequest, res: NextApiResponse<any>) 
{
    const {email, subject, description} = req.body;
    
    console.log(email, subject, description);
    console.log(req.body);
    // should work here now
  
    let flag = true;

    let transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "cb4bcfb37d9f18",
        pass: "ce8aada5bf241e"
    }
    });

// message format
    let message = {
        from: email,
        to: 'tinayousofiali@gmail.com',
        subject,
        text: description,
    }

    try {
        transport.sendMail(message, function(error, info) {
        if (error) {
            res.json({message: "failed"});
            flag = false;
        } else {
            res.json({message: "done"})
            
        }
        
    });

    }
    catch(error) {
        console.log(error);
        flag = false;
    }
}