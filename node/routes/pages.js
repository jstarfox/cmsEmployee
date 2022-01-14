// all API calls are routed from this file for pages collection
 /*Create a router module */
 const express = require("express")
 const router = express.Router();

 /* Require the page model */
const Page = require("../models/page")

/*Define the GET method on the router. */
router.get("/", (req, res) => {
    /* Use find query to retrieve the documents from the collection */
    Page.find({}, (error, pages) => {
        if(error) console.log("Error in Pages" + error)
        /* Display the response in json */
        res.json(pages);
    }); //end of find
}); //end of get

/*Define the POST method on the router. */
router.post("/", (req, res) => {
    const name = req.fields.name;
    const slug = req.fields.slug;
    const content = req.fields.content;
    /* Use find query to retrieve the documents from the collection */
    const page = new Page({
        name: name,
        slug: slug,
        content: content
    });

    console.log(page)

    page.save((error) => {
        if(error) console.log("Error in Pages" + error)
        /* Display the response in json */
            res.status(201).end();
    }); //end of find
}); //end of get

/*Define the POST method on the router. */
router.put("/:id", (req, res) => {
    const id = req.params.id;
    const name = req.fields.name;
    const slug = req.fields.slug;
    const content = req.fields.content;
    /* Use find query to retrieve the documents from the collection */

    Page.findById(id, (error, page) => {
        if(error) console.log("Error in Page" + error)
        /* Display the response in json */
        page.name = name;
        page.slug = slug;
        page.content = content;
        page.save((error) => {
            if(error) console.log("Error in Pages" + error)
            /* Display the response in json */
                res.status(201).end();
        }); //end of find

    }); //end of find

}); //end of get

/*Define the GET method on the router. */
router.delete("/:id", (req, res) => {
    const id = req.params.id;

    /* Use find query to retrieve the documents from the collection */
    Page.findByIdAndRemove(id, (error) => {
        if(error) console.log("Error in Pages" + error)
        else {

        /* Display the response in json */
        res.status(204).end();
        }
    }); //end of find
}); //end of get

//Export the router
module.exports = router;