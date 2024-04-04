import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import axios from "axios";
import './Review.css'
import { MdCancel } from "react-icons/md";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { ToastContainer, toast } from 'react-toastify';


const ReviewSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too short')
        .required('Required'),
    message: Yup.string()
        .min(5, 'Too short')
        .required('Required'),
})

function PostReview({ BookId, setOpen, open }) {
const [value, setValue] = useState(0);

    return (
        <div>
            <Formik
                initialValues={{ name: '', message: '', star: '' }}
                validationSchema={ReviewSchema}
                onSubmit={(values, { setSubmitting }) => {
                    axios.post('https://book-review-backend-1.onrender.com/review', {
                        bookId: BookId,
                        name: values.name,
                        message: values.message,
                        star: value

                    }).then(res => { console.log(res.data) }
                  

                    ).catch(console.log("errors")



                    )
                    setSubmitting(false);
                    setOpen(!open)
                    window.location.reload();



                }}>
                {({ isSubmitting }) => (
                    <Form>
                        <div style={{ backgroundColor: "white", width: "300%", borderRadius: "10px", padding: "10px" }} >
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between', margin: "10px" }} >
                                <h1 style={{ width: "50%", textAlign: "end", fontSize: "20px" }} >Post Review</h1>
                                <p onClick={() => setOpen(!open)} style={{ fontSize: "30px" }} className=' transform hover:scale-105 transition duration-300 hover:text-red-600' ><MdCancel /></p>
                            </div>

                            <div style={{}} className="form-floating mb-3">
                                <Field type="text" className="form-control" id="floating-Input" placeholder="name@example.com" name="name" />
                                <label htmlFor="floatingInput">Enter Name</label>
                                <ErrorMessage className='error_msg' name="name" component="span" />
                            </div>

                            <div id='field_div' className="form-floating mb-3">
                                <Field style={{ height: "100px" }} className="form-control" id="floating--Input" placeholder="name@example.com" as="textarea" name="message" />
                                <label htmlFor="floatingInput">Review</label>
                                <ErrorMessage className='error_msg' name="message" component="div" />
                            </div>
                            <div id='field_div' className="form-floating mb-3">
                                <Box
                                    sx={{
                                        '& > legend': { mt: 2 },
                                    }}
                                >   <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                     <label style={{color:"gray",fontWeight:"400"}}>Rating:</label>
                                    <Rating
                                        name="simple-controlled"
                                        value={value}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                    />
                                </div>
                                   
                                </Box>
                            </div>
                            <div className='button_div' >
                                <button className='registernewbtn' type="submit" disabled={isSubmitting} > Submit</button>
                            </div>
                        </div>
                    </Form>
                )}

            </Formik>
        </div>
    )
}

export default PostReview