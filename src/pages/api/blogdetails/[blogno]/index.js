
export default async function handler(req, res) {
    const featured_blog = [{ "id": "frblghkjhjkhk1", "heading": "This is the first blog This is the first blogThis is the first blogThis is the first blogThis is the first blogThis is the first blogThis is the first blogThis is the first blog", "desc": "This is the description of the 1st first blog" },
    { "id": "frblg2", "heading": "This is the second blog", "desc": "This is the description of the 2 second blog" },
    { "id": "frblg3", "heading": "This is the third blog", "desc": "This is the description of the 3 third blog" },
    { "id": "frblg4", "heading": "This is the fourth blog", "desc": "This is the description of the 4 fourth blog" },
    { "id": "frblg5", "heading": "This is the fifth blog", "desc": "This is the description of the 5 fifth blog" },
    { "id": "frblg6", "heading": "This is the sixth blog", "desc": "This is the description of the 6 sixth blog" },
    { "id": "frblg7", "heading": "This is the sixth blog", "desc": "This is the description of the 7 seventh blog" }, { "id": "frblg8", "heading": "This is the sixth blog", "desc": "This is the description of the 8 eight blog" }, { "id": "frblg9", "heading": "This is the sixth blog", "desc": "This is the description of the 9night blog" }]

    const { method, query } = req;
    console.log(method)
    console.log(query)

    const blogObject = await featured_blog.find(x => x.id === query.blogno)
    console.log(blogObject)
    const blogIndex = await featured_blog.indexOf(blogObject)
    console.log("//  blogid route index is //" + blogIndex)
    res.status(200).json({ "blogdesc": blogObject.desc })

    //const blogIndex = await featured_blog.indexOf(blogObject)
    //console.log("//  blogid route index is //" + blogIndex)
    //console.log(query)
    //  console.log(blogObject.desc)
    //  res.status(200).json({ "blogdesc": blogObject.desc })
}
