import { green } from '@material-ui/core/colors'
import React from 'react'

export default function Cform() {
  return (
    <div>
      <form>
        <label for="title">Title:</label>
        <input style={{margin:"10px"}} type="text" id="title" name="title" />
        <br />
        <br />
        <label for="cat">Categories:</label>
        <input type="text" id="cat" name="cat" />
        <br />
        <br />
        <textarea id="cont" name="cont">
          Content
        </textarea>
        <button style={{backgroundColor:"green",color:"white",margin:"10px"}}>Submit</button>
        <button style={{backgroundColor:"green",color:"white"}}>Cancel</button>
      </form>
    </div>
  )
}
