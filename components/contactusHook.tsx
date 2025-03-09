import Link from "next/link";

const ContactUsHook = () => {
  return (
    <div className="bg-primary/5 text-center py-12">
      <h2 className="text-primary text-[40px] font-[700] ">Whatever you want, we'll do it.</h2>
      <p className="text-secondary text-[16px] font-[400] mt-4 mb-8 max-w-md mx-auto ">
      </p>
      <Link href={'/contact-us'}>
        <button className="  px-7  py-4 text-primary bg-white border-2 border-primary   hover:bg-primary hover:text-white transition-all">
          Contact us
        </button>
      </Link>
    </div>
  );
};

export default ContactUsHook;
