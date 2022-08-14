import Image from 'next/image';
import React, { FunctionComponent } from 'react'
import defaultImage from '../public/default.png'
import { IoPencil, IoShareOutline, IoCheckmarkOutline, IoTrashOutline } from 'react-icons/io5';

const RecipeCard: FunctionComponent = () => {
    return (
        <div className='bg-slate-50 w-64 m-0.5 rounded cursor-pointer'>
            <div className='m-2'>
                <Image
                    src={defaultImage}
                    className='rounded'
                />
            </div>
            <p className='m-2'>Titre</p>
            <p className='m-2'>Description</p>
            <div className='flex flex-row-reverse m-2'>
                <button className='text-xl'>
                    <IoPencil />
                </button>
                <button className='text-xl'>
                    <IoShareOutline />
                </button>
                <button className='text-xl'>
                    <IoTrashOutline />
                </button>
            </div>
        </div>
    )
}

export default RecipeCard;