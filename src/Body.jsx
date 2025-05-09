import hot from "./images/hot-chocolate.png";
import shake from "./images/shake.png";
import tiramisu from "./images/tiramisu.png";
import esperso from'./images/esperso.png';
import late from './images/late.png';
import ice from './images/ice.png';
function Body() {
  return (
    <div className="bg-blue-800 p-20 "  >
        
            <div className="flex gap-4 justify-around pt-8 text-amber-50 flex-wrap  " >
                    <section className='bg-blue-900 transition-all duration-100 rounded-3xl w-96 p-5  ' >
                         <img className="w-64 h-64 object-contain block mx-auto " src={hot} alt="hot-chocolate" /> 
                        <h3 className="border-t-2 pt-4 m-1.5" >هات چاکلت</h3>
                        <div className="flex justify-between" >
                            <p>18 $</p>
                            <a className="bg-amber-50 text-black p-2 pl-2 pr-2 rounded-3xl hover:bg-amber-200"  href="#"> سفارش محصول </a>
                        </div>
                    </section>


                    <section className='bg-blue-900 transition-all duration-100 rounded-3xl w-96 center p-5 '> 
                         <img className="w-64  h-64 object-contain block mx-auto " src={shake} alt="hot-chocolate" /> 
                        <h3 className="border-t-2 pt-4  m-1.5 " >شیک  </h3>
                        <div className="flex justify-between" >
                            <p>23 $</p>
                            <a className="bg-amber-50 text-black p-2 pl-2 pr-2 rounded-3xl hover:bg-amber-200  "  href="#"> سفارش محصول </a>
                        </div>
                    </section>


                    <section className='bg-blue-900 transition-all duration-100 rounded-3xl w-96 p-5'>
                         <img className="w-64 h-64 object-contain block mx-auto " src={tiramisu} alt="hot-chocolate" /> 
                        <h3 className="border-t-2 pt-4 m-1.5" >کیک</h3>
                        <div className="flex justify-between" >
                            <p>15 $</p>
                            <a className="bg-amber-50 text-black p-2 pl-2 pr-2 rounded-3xl hover:bg-amber-200"  href="#"> سفارش محصول </a>
                        </div>
                    </section>

                       <section className='bg-blue-900 transition-all duration-100 rounded-3xl w-96 p-5'>
                         <img className="w-64 h-64 object-contain block mx-auto " src={esperso} alt="hot-chocolate" /> 
                        <h3 className="border-t-2 pt-4 m-1.5" >اسپرسو</h3>
                        <div className="flex justify-between" >
                            <p>10 $</p>
                            <a className="bg-amber-50 text-black p-2 pl-2 pr-2 rounded-3xl hover:bg-amber-200"  href="#"> سفارش محصول </a>
                        </div>
                    </section>

                        <section className='bg-blue-900 transition-all duration-100 rounded-3xl w-96 p-5'>
                         <img className="w-64 h-64 object-contain block mx-auto " src={late} alt="hot-chocolate" /> 
                        <h3 className="border-t-2 pt-4 m-1.5" >لاته</h3>
                        <div className="flex justify-between" >
                            <p>12 $</p>
                            <a className="bg-amber-50 text-black p-2 pl-2 pr-2 rounded-3xl hover:bg-amber-200"  href="#"> سفارش محصول </a>
                        </div>
                    </section>

                        <section className='bg-blue-900 transition-all duration-100 rounded-3xl w-96 p-5'>
                         <img className="w-64 h-64 object-contain block mx-auto " src={ice} alt="hot-chocolate" /> 
                        <h3 className="border-t-2 pt-4 m-1.5" >بستنی</h3>
                        <div className="flex justify-between" >
                            <p>5 $</p>
                            <a className="bg-amber-50 text-black p-2 pl-2 pr-2 rounded-3xl hover:bg-amber-200"  href="#"> سفارش محصول </a>
                        </div>
                    </section>
                        
            </div>

    </div>
  );
}

export default Body;
