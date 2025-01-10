const FirstExtraSection = () => {
    return (
        <>
<div className="p-2">
    <h2 className="font-bold text-3xl md:text-[2.5rem] mx-auto text-center">How PolyLingua work</h2>

{/* card container */}
    <div className="mt-10 flex flex-wrap justify-center gap-5">

        <div className="max-w-80 h-[30rem] border-2 p-2 rounded-sm">{/* first card */}
            <h3 className="p-4 border w-fit font-bold text-xl bg-lime-400 rounded-sm">1</h3>

            <div className="mt-10">
                <h4 className="font-bold text-3xl md:text-[2rem]">Find your tutor.</h4>
                <p className="text-sm">We’ll connect you with a tutor who will motivate, challenge, and inspire you.</p>
            </div>

            <div>
                <img src="https://scdn.italki.com/ng/static/image/asgardhp/offers_01.png"/>
            </div>
        </div>
        {/* card end */}

        <div className="max-w-80 h-[30rem] border-2 p-2 rounded-sm">{/* sec card */}
            <h3 className="p-4 border w-fit font-bold text-xl bg-yellow-400 rounded-sm">2</h3>

            <div className="mt-10">
                <h4 className="font-bold text-3xl md:text-[2rem]">Start learning.</h4>
                <p className="text-sm">Your tutor will guide the way through your first lesson and help you plan your next steps.</p>
            </div>

            <div>
                <img src="https://scdn.italki.com/ng/static/image/asgardhp/offers_04.png"/>
            </div>
        </div>
        {/* card end */}

        <div className="max-w-80 h-[30rem] border-2 p-2 rounded-sm">{/* thard card */}
            <h3 className="p-4 border w-fit font-bold text-xl bg-orange-400 rounded-sm">3</h3>

            <div className="mt-10">
                <h4 className="font-bold text-3xl md:text-[2rem]">Speak. Read. Write. Repeat.</h4>
                <p className="text-sm">Choose how many lessons you want to take each week and get ready to reach your goals!</p>
            </div>

            <div>
                <img src="https://scdn.italki.com/ng/static/image/asgardhp/offers_02.png"/>
            </div>
        </div>
        {/* card end */}
    </div>
</div>
        </>
    );
};

export default FirstExtraSection;