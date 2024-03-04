import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Resultrotte() {
    const [date, setDate] = useState("");

    const monthNames = [
        'มกราคม',
        'กุมภาพันธ์',
        'มีนาคม',
        'เมษายน',
        'พฤษภาคม',
        'มิถุนายน',
        'กรกฎาคม',
        'สิงหาคม',
        'กันยายน',
        'ตุลาคม',
        'พฤศจิกายน',
        'ธันวาคม'
    ];

    const handleChange = (event) => {
        console.log(event.currentTarget.value); // ตรวจสอบค่าที่เลือก
        setDate(event.currentTarget.value);
    };

    return (
        <section>
            <div className="grid justify-center text-center mt-10 px-5">
                <h1 className="text-[#4400A5] font-bold text-[2rem]">ผลสลากกินแบ่งรัฐบาล</h1>
                <div className="flex gap-0 justify-center">
                    {/* <p>ตรวจหวย งวดประจำวันที่ : dd / mm / yyyy</p> */}
                </div>
                <div className="grid grid-cols-3 gap-5 mt-2 justify-center items-center">
                    <FormControl fullWidth>
                        <Select
                            className="border-solid border h-[32px] border-[#4400A5] bg-white p-2 rounded shadow-md text-black"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={date}
                            label="กรุณาเลือกวันที่"
                            onChange={handleChange}
                            native // ใช้งานโหมด native select
                        >
                            <option value="" disabled>กรุณาเลือกวันที่</option>
                            {Array.from({ length: 12 }, (_, i) => (
                                <optgroup label={monthNames[i]} key={i}>
                                    <option value={(i + 1) * 100 + 1}>1 {monthNames[i]} 2024</option>
                                    <option value={(i + 1) * 100 + 16}>16 {monthNames[i]} 2024</option>
                                </optgroup>
                            ))}
                        </Select>
                    </FormControl>

                    <div className="grid ">
                        {/* <label htmlFor="status"></label> */}
                        <input className="rounded border border-[#FF8329] h-[32px] text-center shadow-md" type="number" onInput={(e) => (e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 6))} />
                    </div>
                    <button className="rounded bg-[#FF8329] text-white h-[32px]  border border-[#FF8329] hover:bg-white hover:text-[#FF8329] shadow-md">
                        ตรวจหวย
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Resultrotte;
