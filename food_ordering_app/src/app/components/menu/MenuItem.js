export default function MenuItem() {
    return (
        <div className="bg-gray-300 text-center rounded-lg p-4 hover:bg-white hover:shadow-2xl hover:shadow-black/50 transitio-all">
            <div>
                <img src="/shoyu.png" alt="ramen"></img>
            </div>
            <h4 className="font-semibold my-2">Shoyu Ramen</h4>
            <p className="text-gray-600 text-sm p-2">
                Classic soy sauce-based broth with thin noodles,
                topped with sliced green onions, bamboo shoots,
                and a seasoned boiled egg.<br></br> A savory and balanced
                choice.
            </p>
            <button className="mt-2 bg-primary text-white rounded-full px-4 py-2">
                Add to cart Rs. 459
            </button>
        </div>
    );
}