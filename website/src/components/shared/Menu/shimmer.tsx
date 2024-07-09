export function MenuAnimationShimmer() {
	return (
		<div className='w-7 h-5 flex flex-col items-center justify-between'>
			<div className='w-[90%] rounded-full h-[2px] animate-pulse bg-slate-300' />
			<div className='w-[90%] rounded-full h-[2px] animate-pulse bg-slate-300' />
			<div className='w-[90%] rounded-full h-[2px] animate-pulse bg-slate-300' />
		</div>
	);
}
