import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import React from 'react'

const FAQ = () => {
    return (
        <div className='mt-10'>
            <div>
                <h1 className='text-3xl font-bold text-indigo-950'>FAQ</h1>
            </div>
            <div className='w-2/3 my-5 md:w-full'>
                <Accordion >
                    <AccordionSummary expandIcon={<ArrowDropDownIcon />} >
                        <p >Can Education flashcards be used for all age groups?</p>
                    </AccordionSummary>
                    <AccordionDetails className='bg-slate-200'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </p>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className='w-2/3 my-5 md:w-full'>
                <Accordion >
                    <AccordionSummary expandIcon={<ArrowDropDownIcon />} >
                        <p >How do education flashcards work?</p>
                    </AccordionSummary>
                    <AccordionDetails className='bg-slate-200'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </p>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className='w-2/3 my-5 md:w-full'>
                <Accordion >
                    <AccordionSummary expandIcon={<ArrowDropDownIcon />} >
                        <p >Can Education flashcards be used for test preparation?</p>
                    </AccordionSummary>
                    <AccordionDetails className='bg-slate-200'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </p>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div >
    )
}

export default FAQ
