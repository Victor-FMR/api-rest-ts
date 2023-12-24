import { Request, Response } from "express";
import Stripe from "stripe";

const stripe = new Stripe(
  "sk_test_51OQQOhF6W8ATl3d0YXTk3sEoWsy56Lj1yzVRoOhSiHdpRXxeda2K3PMicZhex6vV9af0bC0HuFjaOIo5QEKE34bn00giETL6hn"
);

export const createSession = async (req: Request, res: Response) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          product_data: {
            name: "laptop",
            description: "gaming",
          },
          currency: "usd",
          unit_amount: 50000,
          
        },
        quantity: 2
      },
    ],
    mode: "payment",
    success_url: "http://localhost:9999/success",
    cancel_url: "http://localhost:9999/cancel",
  });

  return res.json(session)
};
