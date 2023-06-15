export default function handler(request, res) {

    const featured_blog = [{ "id": "frblghkjhjkhk1", "heading": "This is the first blog This is the first blogThis is the first blogThis is the first blogThis is the first blogThis is the first blogThis is the first blogThis is the first blog", "desc": "This is the description of the first blog" },
    { "id": "frblg2", "heading": "This is the second blog", "desc": "This is the description of the second blog" },
    { "id": "frblg3", "heading": "This is the third blog", "desc": "This is the description of the third blog" },
    { "id": "frblg4", "heading": "This is the fourth blog", "desc": "This is the description of the third blog" },
    { "id": "frblg5", "heading": "This is the fifth blog", "desc": "This is the description of the third blog" },
    { "id": "frblg6", "heading": "This is the sixth blog", "desc": "This is the description of the third blog" },
    { "id": "frblg7", "heading": "This is the sixth blog", "desc": "This is the description of the third blog" }, { "id": "frblg8", "heading": "This is the sixth blog", "desc": "This is the description of the third blog" }, { "id": "frblg9", "heading": "This is the sixth blog", "desc": "This is the description of the third blog" }


    ]



    //return new Response('Hello, Next.js!')
    res.status(200).json({ "data": featured_blog })
    //res.status(200).json({ "message": "Hi Hello" })
}