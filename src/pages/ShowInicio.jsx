import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import axios from 'axios';

const ShowInicio = () => {

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [categoryWomen, setCategoryWomen] = useState([]);
  const [categoryMen, setCategoryMen] = useState([]);


  const responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '991px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  const getData = async() => {

    const data = await axios.get('https://fakestoreapi.com/products?limit=10');
    console.log(data.data)
    const saveProd = setProducts(data.data);

  }

  const getDataCategory = async() => {
    const category = await axios.get(`https://fakestoreapi.com/products/category/jewelery`);
    console.log(category.data)
    const saveCategory = setCategory(category.data)
  }

  const getDataMen = async() => {
    const category = await axios.get(`https://fakestoreapi.com/products/category/men's clothing`);
    console.log(category.data)
    const saveCategory = setCategoryMen(category.data)
  }


  const getDataWomen = async() => {
    const category = await axios.get(`https://fakestoreapi.com/products/category/women's clothing`);
    console.log(category.data)
    const saveCategory = setCategoryWomen(category.data)
  }



  const productTemplate = (product) => {
    return (
      <div className="border-1 surface-border border-round m-2 text-center py-2 px-3">
        <div className="mb-3">
          <img src={product.image}  className="w-2 shadow-2 img-api" />
        </div>
        <div>
          <h4 className="mb-1 desc">{product.title}</h4>
          <h6 className="mt-0 mb-3">${product.price}</h6>
          <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
            <Button icon="pi pi-search" rounded />
            <Button icon="pi pi-star-fill" rounded severity="success" />
          </div>
        </div>
      </div>
    );
  };




  useEffect(() => {
    getData();
    getDataMen();
    getDataWomen();
    getDataCategory();

  
  }, [])




  return (
    <>
      <div className="container">
        <div className="section-img">
          <img src="src\assets\inicio-img.jpg" alt="" className="img-inicio" />
          <h1 className="centrado">tienda electroncia mayorista</h1>
        </div>
      </div>

      {/*seccion ma vendido*/}
      <div className="container">
        <h1 className="text-2">NUESTROS PRODUCTOS MAS VENDIDOS</h1>
        <div className="card">
          <Carousel value={products} numVisible={4} numScroll={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
        </div>
      </div>


       {/*seccion joyas?*/}
       <div className="container">
        <h1 className="text-2">NUESTROS PRODUCTOS DE JOYERIA</h1>
        <div className="card">
          <Carousel value={category} numVisible={2} numScroll={2} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
        </div>
      </div>

        {/*seccion joyas?*/}
        <div className="container">
        <h1 className="text-2">NUESTROS PRODUCTOS PARA HOMBRE</h1>
        <div className="card">
          
          <Carousel value={categoryMen} numVisible={2} numScroll={2} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
        </div>
      </div>


        {/*seccion joyas?*/}
        <div className="container">
        <h1 className="text-2">NUESTROS PRODUCTOS PARA MUJER</h1>
        <div className="card">
          
          <Carousel value={categoryWomen} numVisible={2} numScroll={2} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
        </div>
      </div>

    </>


  )
}

export default ShowInicio