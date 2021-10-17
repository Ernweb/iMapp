
//CREATE OPERATION

router.post("",(req, res, next) => {
        const post = new Post({
                userCode: req.body.userCode,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                gender: req.body.gender,
                dateOfBirth: req.body.dateOfBrith,
                branchCode: req.body.branchCode,
                image: req.body.image,
                mobile: req.body.mobile,
                address: req.body.address,
        })
        post.save().
            then(post => {
                if(post){
                    res.status(201).json({
                        message: "Post added successfully",
                        post: {
                            ...post,
                            id: post._id
                        }
                    })
                }
        }).catch(e => {
                console.log(e)
            })
    })

// READ OPERATION
router.get("/mypost", (req, res, next) => {
    Post.find({creator: req.userData.userId}).then(post => {
      if (post) {
        res.status(200).json({
            message: "Posts fetched successfully!",
            posts: post
        });
      }
    }).catch(e=>{
        console.log(e)
    });
  });

//UPDATE OPERATION
router.put(
    "/:id",
    (req, res, next) => {
        const post = new Post({
            _id: req.body.id,
            userCode: req.body.userCode,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email                
	    gender: req.body.gender,
            dateOfBirth: req.body.dateOfBrith,
            branchCode: req.body.branchCode,
            image: req.body.image,
            mobile: req.body.mobile,
            address: req.body.address,
        });
        Post.updateOne(
            { _id: req.params.id},
            post
          ).then(result => {
            if(result){
                res.status(200).json({ message: "Update successful!" });
            }       
            else {
                res.status(500).json({ message: "Error Upating Post" });
            }
        });
    }
);


//DELETE OPERATION
router.delete("/:id", (req, res, next) => {
    Post.deleteOne({ _id: req.params.id, creator: req.userData.userId }).then(
      result => {
        console.log(result);
        if (result.n > 0) {
          res.status(200).json({ message: "Deletion successful!" });
        } else {
            return res.status(401).json({ message: "Not authorized!!" });
        }
      }
    );
  });
