import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Resultrotte(){
    const [date, setBank] = useState("");

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
        setBank(event.target.value);
    };

    return(
        <section>
            <div className="grid justify-center text-center mt-10 px-5">
                <h1 className="text-[#4400A5] font-bold text-[2rem]">ผลสลากกินแบ่งรัฐบาล</h1>
                    <div className="flex gap-0 justify-center">
                        <p>ตรวจหวย งวดประจำวันที่ : dd / mm / yyyy</p>
                    </div>
                    <div className="grid grid-cols-3 gap-5 mt-2 justify-center items-center">
                        <FormControl fullWidth>
                            <Select
                                className="border-solid border h-[31.6px] border-[#4400A5] p-1 rounded shadow-md"
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={date}
                                label="กรุณาเลือกวันที่"
                                onChange={handleChange}
                            >
                                {Array.from({length: 12}, (_, i) => (
                                    <div key={i}>
                                        <MenuItem value={(i + 1) * 100 + 1}>1  {monthNames[i]}</MenuItem>
                                        <MenuItem value={(i + 1) * 100 + 16}>16 {monthNames[i]}</MenuItem>
                                    </div>
                                ))}
                            </Select>
                        </FormControl>
                        <div className="grid ">
                                <label htmlFor="status"></label>
                                <input className="rounded border border-[#FF8329] shadow-md" type="number" onInput={(e) => (e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 6))}/>
                        </div>
                            <button className="rounded bg-[#FF8329] text-white p-2 border border-[#FF8329] hover:bg-white hover:text-[#FF8329] shadow-md">
                                ตรวจหวย
                            </button>
                    </div>
            </div>
        </section>
    );
}
export default Resultrotte
