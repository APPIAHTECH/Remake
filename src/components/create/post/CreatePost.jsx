import React from 'react';
import './createPost.css'

const CreatePost = () => {
    return (
        <>
            <div className="write">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN061cJeYto059MxVkGZTeeaTybBYd4aHRaQ&usqp=CAU" className="writeImg"/>
                <form action="post" className="writeForm">
                    <div className="writeFormGroup">
                        <label htmlFor="fileInput">
                            <span className="writeIcon"><box-icon name='add-to-queue' ></box-icon></span>
                        </label>
                        <input type="file" id="fileInput"  style={{display:"none"}}/>
                        <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
                    </div>

                    <div className="writeFormGroup">
                        <textarea placeholder="What's Up ..." type="text" className="writeInput writeText"></textarea>
                        <button className="writeSubmit"> Publish </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default CreatePost;
