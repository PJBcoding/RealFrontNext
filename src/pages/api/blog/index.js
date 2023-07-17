import { useEffect } from "react"

export default function handler(request, res) {

    const featured_blog = [

        { "id": "frbl1", "heading": "This is the first blog ", "desc": "This is the description of the 1st first blog " },
        { "id": "frblg2", "heading": "This is the second blog", "desc": "This is the description of the 2 second blog" },
        { "id": "frblg3", "heading": "This is the third blog", "desc": "This is the description of the 3 third blog" },
        { "id": "frblg4", "heading": "This is the fourth blog", "desc": "This is the description of the 4 fourth blog" },
        { "id": "frblg5", "heading": "This is the fifth blog", "desc": "This is the description of the 5 fifth blog" },
        { "id": "frblg6", "heading": "This is the sixth blog", "desc": "This is the description of the 6 sixth blog" },
        { "id": "frblg7", "heading": "This is the seventh blog", "desc": "This is the description of the 7 seventh blog" },
        { "id": "frblg8", "heading": "This is the eight blog", "desc": "This is the description of the 8 eight blog" },
        { "id": "frblg9", "heading": "This is the ninth blog", "desc": "This is the description of the 9 night blog" }


    ]



    //return new Response('Hello, Next.js!')
    res.status(200).json({ "data": featured_blog })
    //res.status(200).json({ "message": "Hi Hello" })
}