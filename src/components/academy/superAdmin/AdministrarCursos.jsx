import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AdministrarCursos = () => {
  const [value, setValue] = useState('');


  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
    ['link', 'image', 'video', 'formula'],
  
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
  
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
  
    ['clean']                                         // remove formatting button
  ];

  const module = {
    toolbar: toolbarOptions,
  }


  useEffect(() => {
    console.log(value)
  }, [])

  
  return (
    <div>
        <ReactQuill modules={module} theme="snow" value={value} onChange={setValue} />
        <div  dangerouslySetInnerHTML={{ __html: value }} />
        <a href="https://biz.payulatam.com/B0f6a52E84BAE3D"><img src="https://ecommerce.payulatam.com/img-secure-2015/boton_pagar_mediano.png"/></a>
    </div>
  )
}

export default AdministrarCursos