import { BiGridAlt } from "react-icons/bi";
import "./Title.css"

function Title2(){
    return(
        <section>
            <div className="gap-4 w-40">
              <div className="divider divider-end text-xl">
                เลือกประเภทการแทง
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 p-5 ">

            <button className="btn">
                <BiGridAlt /> สี่ตัวบน
                <div className="badge badge-primary">1,000</div>
            </button>
            <button className="btn">
                <BiGridAlt /> สามตัวโต๊ด
                <div className="badge badge-primary">1,000</div>
            </button>
            <button className="btn">
                <BiGridAlt /> สามตัวล่าง
                <div className="badge badge-primary">1,000</div>
            </button>
            <button className="btn">
                <BiGridAlt /> สองตัวบน
                <div className="badge badge-primary">1,000</div>
            </button>
            <button className="btn">
                <BiGridAlt /> สองตัวล่าง
                <div className="badge badge-primary">1,000</div>
            </button>
            <button className="btn">
                <BiGridAlt /> วิ่งบน
                <div className="badge badge-primary">1,000</div>
            </button>
            <button className="btn">
                <BiGridAlt /> วิ่งล่าง
                <div className="badge badge-primary">1,000</div>
            </button>

            </div>
            <div className="gap-4 w-40 ">
                <div className="divider divider-end text-xl">กดเลข</div>
              </div>
        </section>
    )
}
export default Title2