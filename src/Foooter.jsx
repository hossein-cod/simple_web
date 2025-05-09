function Foooter(){
    return(
        <footer className="bg-amber-50" >
            <div className="flex gap-20 p-8 items-center " >
           <section className="w-1/2">
                <h3 className="mb-2.5 font-bold  text-right">درباره ما</h3>
                <p className="leading-relaxed">
                    کافه ترسا یک کافه دنج و دوست داشتنی است که با طراحی داخلی زیبا و آرامش‌بخش، مکانی ایده‌آل برای گذراندن اوقات فراغت به حساب می‌آید. آنها انواع قهوه‌های با کیفیت، نوشیدنی‌های سرد و گرم، و همچنین کیک‌ها و شیرینی‌های خوشمزه را ارائه می‌دهند. محیط کافه صمیمی و مناسب برای گفتگو و مطالعه است. در مجموع، کافه ترسا یکی از گزینه‌های خوب برای دوستداران قهوه و کافه‌های آرام است.
                </p>
            </section>

                <section className="w-1/2" >
                                <ul className="flex flex-col gap-2.5">
                                    <li>
                                        <a className="mb-2.5" href="#">
                                        <i className="fas fa-home ml-1.5"></i>
                                        صفحه اصلی
                                        </a>
                                    </li>
                                    <li>
                                        <a className="mb-2.5" href="#">
                                        <i className="fas fa-list ml-1.5"></i>
                                        محصولات
                                        </a>
                                    </li>
                                    <li>
                                        <a className="mb-5" href="#">
                                        <i className="fas fa-blog ml-1.5"></i>
                                        وب لاگ
                                        </a>
                                    </li>
                                </ul>

                </section>
            </div>

            <p className="text-center  mt-10 " > &copy; copyright hossein </p>
            <a href="#" className="bg-blue-800 text-amber-50 p-4 rounded-2xl " > 
                <i className="fa fa-arrow-up" >
                </i> 
                </a>
    </footer>
    )

}
export default Foooter;