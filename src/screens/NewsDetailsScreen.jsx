import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  StyleSheet,
  Platform,
} from 'react-native';
import colors from '../lib/colors';
import CalenderIcon from 'react-native-vector-icons/AntDesign';
import TimeIcon from 'react-native-vector-icons/Ionicons';
const {width, height} = Dimensions.get('window');
const DetailsScreen = ({route}) => {
  const {blogId} = route.params;

  // Fetch blog details based on blogId and render the content

  return (
    <View style={{flex: 1}}>
      <View style={{alignItems: 'center'}}>
        <Image
          source={require('../assests/news.webp')}
          style={{width: width, height: height * 0.3}}
          alt="news image"
          resizeMode="cover"
        />
      </View>
      <View>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            padding: 10,
            color: 'black',
          }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
          voluptatem!
        </Text>
        <View style={{flexDirection: 'row',justifyContent:'space-around'}}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <CalenderIcon name="calendar" size={20} color={'red'} />
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 12,
                padding: 10,
                color: 'black',
              }}>
              2080-02-21
            </Text>
          </View>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <TimeIcon name="time" size={20} color={'red'} />
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 12,
                padding: 10,
                color: 'black',
              }}>
              2080-02-21
            </Text>
          </View>
        </View>
      </View>
      <ScrollView>
        <Text
          style={{
            fontSize: 18,
            padding: 10,
            textAlign: 'justify',
            lineHeight: 25,
          }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
          cupiditate delectus dicta voluptas harum minus eos molestiae nostrum
          deserunt illo rem, aliquid recusandae, ratione accusantium ipsam cum
          nihil provident, voluptatum deleniti beatae exercitationem! Ad quaerat
          cumque blanditiis sint pariatur consectetur numquam officia nihil,
          enim atque cupiditate perferendis. Impedit, vero. Sequi cupiditate
          aspernatur architecto! Nemo quam eos alias laborum eum consectetur!
          Illo, vitae adipisci cupiditate consequatur voluptatem expedita?
          Molestiae nemo enim reprehenderit, exercitationem iste, distinctio ex
          tempore veritatis magni praesentium iure nesciunt incidunt est minima!
          Repudiandae id rem perspiciatis suscipit exercitationem? Minima
          corporis suscipit nihil deserunt error eaque doloremque dolores
          libero, soluta rerum vel nobis iure odio quibusdam dicta officia
          veniam quaerat illo. Unde nemo aliquam omnis molestias! Doloribus,
          architecto tempora. Nam exercitationem repellat odit sequi fugiat
          praesentium ducimus quibusdam velit eius aspernatur provident ullam
          perferendis nihil, commodi iure dolor dolorem necessitatibus? Commodi,
          totam! Accusamus error qui corporis itaque obcaecati possimus, vitae
          aliquam in atque, accusantium voluptatum tenetur ab nulla dignissimos
          quis soluta nostrum nesciunt voluptas non, incidunt similique fuga
          molestiae! Quibusdam illum voluptate impedit vel reiciendis excepturi,
          ut accusantium id sit maxime aspernatur dignissimos praesentium
          facilis iusto consectetur omnis nam doloremque? Voluptatem dolores
          unde, repellat laudantium maiores illo exercitationem rem esse vero
          vitae quas fugiat cumque repellendus tenetur minima, odit doloribus
          nisi eveniet consequuntur. Rerum corrupti obcaecati cum ratione
          maiores maxime iusto possimus esse ullam sed, repellat odio molestiae
          nihil ipsam debitis unde, sapiente ea nulla quidem facere eum
          laboriosam ipsa tempore. Sequi, neque. Illum, sapiente harum aut
          consequatur repudiandae cumque numquam dolore laudantium temporibus,
          nesciunt reprehenderit. Laboriosam tempora quo iusto vero! Excepturi
          eligendi cum quas ipsa aut. Nisi ratione nulla aliquid, a aliquam est
          quam, quasi molestiae amet dolores consectetur veniam mollitia
          provident voluptatum dolor iste quod itaque obcaecati eaque, dolorum
          omnis sunt laudantium repellat perspiciatis! Accusamus porro similique
          dicta eos, animi, possimus iusto eaque suscipit eligendi sit nisi
          ducimus ipsa obcaecati eius quis soluta, ipsum nam cum velit eum quas
          nihil necessitatibus. Repellendus aut natus odio sed magni praesentium
          aperiam? Deserunt et, sunt quas architecto magni hic fugit deleniti
          non incidunt molestiae tempora esse animi. Vitae ipsum at, recusandae
          natus, error aperiam aut modi et, optio autem architecto tempora nulla
          ea consequatur? Totam alias nemo, a atque illum ratione amet
          laboriosam iste quam nostrum. Alias accusamus magnam doloremque
          numquam tempora, quia sint debitis laborum, qui rem ipsam mollitia
          quae natus dolorum eius odio voluptatem totam minima maxime, tempore
          exercitationem vel ratione. Voluptatem esse nemo est, excepturi, totam
          atque quae accusamus obcaecati ea enim itaque distinctio!
          Exercitationem nam architecto sit dignissimos aperiam commodi autem
          repellat voluptatum eius officiis, impedit eligendi quisquam velit
          sunt doloribus ducimus laborum quod cupiditate numquam quibusdam
          voluptatibus quam alias! Corrupti quaerat praesentium aliquid atque
          officiis? Nisi doloremque laborum ullam sint? Asperiores, non, beatae
          voluptatem facilis facere magnam est cum perspiciatis, libero corporis
          quisquam quia debitis assumenda. Quam alias possimus repudiandae
          numquam saepe nihil! Cupiditate soluta unde asperiores recusandae
          consequatur? Optio quo, repudiandae architecto minima nesciunt
          corporis eligendi delectus laborum incidunt doloribus qui,
          exercitationem libero aspernatur eum unde eos possimus quasi, ratione
          sapiente molestiae debitis iusto! Velit, totam quasi? Consequuntur
          consequatur esse nihil, ut iste assumenda inventore ipsa nulla fuga
          pariatur iusto, asperiores similique, debitis quis repellendus ratione
          doloribus aliquid. Quo facilis quasi tenetur deserunt, cupiditate
          aliquid placeat perferendis nesciunt, nemo praesentium, maxime
          accusantium fuga suscipit tempore debitis. Perferendis eveniet
          recusandae nam quos. Repellendus dolorem reiciendis exercitationem
          mollitia quae laudantium veritatis ratione autem! Doloremque, sit
          veniam! Animi doloremque debitis cumque consectetur at itaque
          inventore ad eum libero repellat asperiores perferendis est velit
          aliquid accusantium, quibusdam commodi repellendus. Rem nobis ratione
          provident mollitia. Fuga, accusamus! Sed corporis adipisci laborum
          vel, nobis veniam dolorum libero consequuntur rerum consequatur cum
          nam optio ad aliquid illo pariatur iusto sequi debitis commodi ipsam
          incidunt nesciunt fuga aliquam voluptatum! Nobis, quidem consequuntur
          harum voluptas doloremque magni? Incidunt atque quod nisi est iste
          repellendus repellat fugiat eum harum aperiam, fuga recusandae
          cupiditate magnam quis? A quisquam harum numquam eos necessitatibus
          dolor molestiae laboriosam tempora iure, possimus quasi sit
          consequatur, facilis rerum rem, perferendis vitae tempore quia nulla
          obcaecati id facere consequuntur qui? Commodi itaque consequatur aut
          sapiente, enim quas eum dignissimos? Saepe eaque sequi aliquam esse
          consequatur atque deserunt, sit dolorum dolor. Deleniti eius quam
          facilis. Atque dolorem blanditiis fugit ipsum temporibus fugiat
          ducimus? Dolor ducimus illo modi officiis harum, atque dolores
          consequuntur saepe eaque fuga dicta. Asperiores, aperiam deserunt
          repellat sit, animi, ipsum tempore explicabo earum hic eum adipisci
          non rem fugiat veritatis neque aliquam commodi. Dolorum possimus
          ducimus qui obcaecati tenetur placeat omnis at quis fugit reiciendis
          natus rem optio ex quibusdam ea velit in neque, adipisci odio,
          suscipit nobis consequatur fugiat. Enim nostrum corporis vel dolorum
          soluta nemo provident, eius alias omnis esse! Alias dolorem ex, ad
          esse omnis atque nam quis quia necessitatibus quam ipsam. Sunt unde
          magnam minima dolor, iure dolorum magni! Deleniti sapiente quaerat
          soluta. Rem modi quae reiciendis numquam porro beatae dolores,
          voluptate voluptates illum quas delectus, ipsum odio rerum maxime
          repellendus harum itaque culpa minus sequi est. Enim molestiae
          provident sunt praesentium error, debitis nesciunt eum quaerat soluta
          ea eligendi, id unde. Id ex vero veritatis fugiat in cum? Fugiat cum
          dignissimos ad earum quae beatae nobis deleniti aperiam voluptatem,
          magnam molestiae expedita ipsum natus laboriosam labore quod delectus
          dolorem veniam aliquam, amet voluptatibus impedit! Culpa distinctio,
          in enim veritatis impedit fuga deleniti aut voluptates sit commodi
          aspernatur sapiente ea eius alias illum? Maxime, doloribus voluptatem
          corporis dolorum quaerat vero dolore. Mollitia, omnis nobis recusandae
          quia explicabo, autem similique commodi et impedit praesentium
          veritatis soluta ullam sint. Harum corrupti cumque impedit ratione
          fugit soluta optio hic laboriosam ex vero, error libero quam autem
          perspiciatis. Possimus, voluptatibus iste. Explicabo tempora enim
          dolor obcaecati molestiae. Eum libero sequi facere quos deserunt
          dolorum doloremque saepe voluptatem! Dolores asperiores amet ad facere
          sequi animi nesciunt minima non incidunt sunt, dolorem quisquam
          corrupti, quasi sapiente assumenda aperiam excepturi rem odio maiores.
          Aperiam minima dolore incidunt necessitatibus sit est a. Aliquid dicta
          repellendus facere fugiat numquam, autem quae corporis labore quia?
        </Text>
      </ScrollView>
    </View>
  );
};

export default DetailsScreen;
