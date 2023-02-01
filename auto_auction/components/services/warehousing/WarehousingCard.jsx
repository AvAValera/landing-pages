export default function WarehousingCard({text}) {
  return (
    <div className='warehousing-card'>
        <div className="warehousing-card__container shadow-servshadow rounded-[20px] h-[120px] w-[320px] xl:w-[540px] flex justify-center items-center">
            <span className="text-2xl leading-[26px] max-w-[396px] font-bold text-center ">{text}</span>
        </div>
    </div>
  )
}
