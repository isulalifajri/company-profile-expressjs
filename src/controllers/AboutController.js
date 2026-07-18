class AboutController {

    index(req,res){

        res.send("About");

    }

}
    
module.exports = new AboutController();