import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holidays = "🚴" | "🥚" | "🇬🇭" | "🎄" | "🐅";

const getHolidayAlphabetically: Record<Holidays, Holidays> = {
    "🚴": "🥚",
    "🥚": "🇬🇭",
    "🇬🇭": "🎄",
    "🎄": "🐅",
    "🐅": "🚴"
};

const getHolidayByDate: Record<Holidays, Holidays> = {
    "🎄": "🇬🇭",
    "🇬🇭": "🥚",
    "🥚": "🚴",
    "🚴": "🐅",
    "🐅": "🎄"
};
export function CycleHoliday(): JSX.Element {
    const [Holiday, setHoliday] = useState<Holidays>("🚴");

    function get_HolidayAlphabetically(): void {
        const nextHoliday = getHolidayAlphabetically[Holiday];
        setHoliday(nextHoliday);
    }

    function get_HolidayByDate(): void {
        const nextHoliday = getHolidayByDate[Holiday];
        setHoliday(nextHoliday);
    }

    return (
        <div>
            <span>Holiday: {Holiday}</span>
            <div>
                <Button onClick={get_HolidayAlphabetically}>
                    Advance by alphabet
                </Button>
                <Button onClick={get_HolidayByDate}>Advance by year</Button>
            </div>
        </div>
    );
}
