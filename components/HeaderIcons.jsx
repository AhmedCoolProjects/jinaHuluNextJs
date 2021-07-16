function HeaderIcons({ item }) {
  return (
    <div
      className="items-center text-center flex-1 flex flex-col 
     group w-12 sm:w-14 hover:text-white cursor-pointer whitespace-nowrap">
      <item.Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className="opacity-0 text-xs sm:text-sm group-hover:opacity-100 tracking-widest">
        {item.title}
      </p>
    </div>
  );
}

export default HeaderIcons;
