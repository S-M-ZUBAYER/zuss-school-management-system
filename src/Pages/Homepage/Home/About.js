import React from 'react';
import img from "../../../Assets/Images/School_img.jpg"

const About = () => {
    return (
        <div className="bg-gradient-to-l from-blue-900 via-slate-900 to-black text-slate-100">
            <h1 className="pt-20 text-3xl font-bold text-yellow-300">About Us</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 ">
                <div className="flex items-center justify-center">
                    <img className="h-4/6 rounded-2xl shadow-lg" src={img} alt="" />
                </div>
                <div className="px-20 flex items-center">
                    <p className=" text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eum dignissimos ullam vero, maiores sunt exercitationem, atque vitae labore, asperiores mollitia quasi voluptas! Neque dolores perspiciatis placeat magnam voluptatem distinctio asperiores facilis dicta fugit, rem aliquid similique doloribus sapiente consequatur sed aspernatur iusto officiis doloremque veritatis atque error repudiandae corporis repellat! Suscipit maiores quos eligendi animi error ut consequatur vero quis reiciendis, eaque quod saepe fuga vitae nihil temporibus veniam nam quidem! Qui nobis non fugit, molestias placeat numquam nihil architecto dicta ipsa deserunt? Necessitatibus consectetur harum sequi asperiores quo architecto modi consequatur provident sint laboriosam nobis tempore aliquid sed placeat molestiae, voluptatibus repellendus rerum ratione eveniet, tenetur numquam officiis qui? Dolorum quas laudantium explicabo reiciendis ipsum officiis voluptates sequi tempore natus commodi facere consequuntur nobis autem cumque a ipsam, at consectetur, dolor maiores itaque est ad aspernatur. Ea provident unde sapiente vero obcaecati voluptatibus voluptatum amet eum sunt doloribus pariatur voluptatem optio maiores consequuntur est ipsam officia iste, incidunt ipsa repudiandae facere consequatur deleniti vitae? Fuga, debitis. In, unde assumenda et architecto fugiat corporis voluptate non.</p>
                </div>
            </div>

        </div>
    );
};

export default About;