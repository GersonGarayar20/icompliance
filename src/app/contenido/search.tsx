import React from "react";

export default function Search() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("bucando");
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="Busca una publicación" />
        <button>Buscar</button>
      </form>
    </div>
  );
}
