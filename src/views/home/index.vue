<template>
  <div class="home">
    <h1>Home</h1>
    <CustomText>Merhaba Vue</CustomText>
    <CustomText class="a1" tag="p" size="small">Merhaba Vue</CustomText>
    <CustomText class="a2" tag="p" size="xsmall">Merhaba Vue</CustomText>
    <CustomText class="a3" tag="p" size="xxsmall">Merhaba Vue</CustomText>
    <IconHome width="60" height="60" />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
      consequuntur laborum ullam facilis cumque sed aspernatur soluta earum eum,
      nobis nesciunt possimus ad quos porro. Quia enim totam asperiores vitae!
    </p>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, animi.
      Libero tempore facilis vero explicabo velit nisi? Commodi doloremque
      aliquid minima ea vel iste? Natus ipsa consectetur quam molestias.
      Repellat.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque alias
      nihil, nesciunt cumque esse, ex labore veritatis temporibus accusamus
      excepturi modi quos natus iure quaerat enim sint quidem aspernatur
      placeat?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia consequuntur
      error alias at aliquid nisi possimus, labore minus quasi accusamus cum
      beatae excepturi doloremque impedit, laudantium vel, itaque unde quidem?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sit
      possimus earum itaque perspiciatis vitae? Eveniet, rem. Consectetur
      voluptates accusantium dicta esse quae nostrum reiciendis explicabo, vitae
      natus temporibus quos.
    </p>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem perferendis
      animi velit quasi fugit, placeat deleniti ea impedit magnam tenetur
      corrupti asperiores aperiam officiis natus quod voluptates quibusdam,
      veritatis similique.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ex
      voluptas, aspernatur fugit nobis, odit consectetur esse nostrum laboriosam
      debitis animi, quo fuga cupiditate aperiam. Sit explicabo quis accusamus
      nostrum saepe, libero nam ipsa voluptatibus veniam nesciunt blanditiis ea.
      Necessitatibus omnis perspiciatis officiis vel, voluptatem minus!
      Consequuntur incidunt perspiciatis cum amet natus nesciunt id possimus
      fuga qui molestiae culpa, quae nobis adipisci laboriosam sapiente aliquid,
      reiciendis deserunt rem nisi, expedita dolor quas blanditiis tenetur
      neque. Quam dicta voluptas exercitationem fugit? Cupiditate exercitationem
      dignissimos nulla iure fuga, explicabo maxime sapiente ut voluptates? Sed
      non a rem in magni fugit, repudiandae error!
    </p>
  </div>
</template>

<script>
import CustomText from "@/components/CustomText";
import IconHome from "@/icons/home.svg";

export default {
  name: "Home",
  components: {
    CustomText,
    IconHome,
  },
};
</script>

<style scoped>
.a1 {
  color: rgb(var(--f75));
}

.a2 {
  color: rgb(var(--b3f));
}

.a3 {
  color: rgb(var(--ba8));
}
</style>
