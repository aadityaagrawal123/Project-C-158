AFRAME.registerComponent("cursor-listener",{
    schema: {
        selectedItemId: { default: "", type: "string" },
      },
      init: function () {
        this.handleMouseEnterEvents();
        this.handleMouseLeaveEvents();
      },

      handleComicsListState: function () {
        const id = this.el.getAttribute("id");
        const comicsId = ["superman", "spiderman", "captain-aero", "outer-space"];
        if (comicsId.includes(id)) {
          const postersContainer = document.querySelector("#posters-container");
          postersContainer.setAttribute("cursor-listener", {
            selectedItemId: id,
          });
          this.el.setAttribute("material", {
            color: "#CA07ED",
            opacity: 1,
          });
        }
      },

      handleMouseEnterEvents: function () {
        this.el.addEventListener("mouseenter", () => {
            this.handleComicsListState();
        })
      },
      handleMouseLeaveEvents: function () {
        this.el.addEventListener("mouseleave", () => {
            const {selectedItemId} = this.data;
            if (selectedItemId) {
                const el = document.querySelector(`#${selectedItemId}`);
                const id = el.getAttribute("id");
                if (id == selectedItemId) {
                    el.setAttribute("material", {color:"#10EC7E", opacity:1});
            };
            };
        })
      }

});