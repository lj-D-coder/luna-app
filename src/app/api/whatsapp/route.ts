import { NextResponse } from "next/server";


// Define the POST function to handle POST requests
export async function POST(req: any): Promise<NextResponse> {
    try {
        // console.log(req.body);
        // // Replace 'YOUR_FACEBOOK_ACCESS_TOKEN' with your actual access token
        const accessToken = "EAALApE2JF1IBO4uyDZAwdZCd5zsvXf8PjbB97jiw15LqNYyJgiBKdr35DQIAZB0aECZBtJ1PmMk6hz1zt6feP2VgyfVCw4fbo58uRan5neWWxXOSkJHoMYxh76lKp2SUWnkZBqiUOkaBOxXZADTPzYTTZAqhZBiPauIb7xUpCvKuotHzD2LPg343iwaRzuZAZCgdhG6JneNtEG89h7J40vuikZD";

        // Define the recipient's WhatsApp number
        const recipientNumber = "+917005682337"; // Update with the recipient's WhatsApp number

        // Define the Facebook Graph API URL
        const url = "https://graph.facebook.com/v18.0/278525638677011/messages";

        // console.log(url);

        // // Prepare the request body with the provided JSON payload
        const body = JSON.stringify({
            "messaging_product": "whatsapp",
            "to": "+917005682337",
            "type": "template",
            "template": {
                "name": "booking_confirmed",
                "language": {
                    "code": "en_US",
                    "policy": "deterministic"
                },
                "components": [
                    {
                        "type": "body",
                        "parameters": [
                            {
                                "type": "text",
                                "text": "Leonard"
                            },
                            {
                                "type": "text",
                                "text": "Car detailing"
                            },
                            {
                                "type": "text",
                                "text": "12/6/2024"
                            },
                            {
                                "type": "text",
                                "text": "Rs 2000"
                            }
                        ]
                    }
                ]
            }

        });

        // Send the POST request to the Facebook Graph API
        const response = await fetch("https://graph.facebook.com/v18.0/278525638677011/messages", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
            body: `{
                "messaging_product": "whatsapp",
                "to": "+917005682337",
                "type": "template",
                "template": {
                    "name": "booking_confirmed",
                    "language": {
                        "code": "en_US",
                        "policy": "deterministic"
                    },
                    "components": [
                        {
                            "type": "body",
                            "parameters": [
                                {
                                    "type": "text",
                                    "text": "Leonard"
                                },
                                {
                                    "type": "text",
                                    "text": "Car detailing"
                                },
                                {
                                    "type": "text",
                                    "text": "12/6/2024"
                                },
                                {
                                    "type": "text",
                                    "text": "Rs 2000"
                                }
                            ]
                        }
                    ]
                }
    
            }`,
        });

        // console.log(body);

        console.log(response.body);


        // Check if the response is successful
        if (!response.ok) {
            return NextResponse.json({ message: "Whatsapp failed msg" }, { status: response.status });

        }

        return NextResponse.json({ response, "message": "Whatsapp send msg" }, { status: 200 });

        // Send a success response to the client

    } catch (error) {
        // Log and send an error response if an error occurs
        console.error("Error sending message:", error);
        return NextResponse.json({ message: "Whatsapp failed msg" }, { status: 500 });

    }

}
