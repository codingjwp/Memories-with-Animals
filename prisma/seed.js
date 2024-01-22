const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const species = await prisma.species.createMany({
    data: [
      {
        species: "dog",
        krSpecies: "강아지"
      },
      {
        species: "cat",
        krSpecies: "고양이"
      }
    ]
  })

  const breeds = await prisma.breeds.createMany({
    data: [
      { speciesId: "dog", breed: "maltese", krBreed: "말티즈" },
      { speciesId: "dog", breed: "bulldog", krBreed: "불독" },
      { speciesId: "dog", breed: "dachshund", krBreed: "닥스훈트" },
      { speciesId: "dog", breed: "poodle", krBreed: "푸들" },
      { speciesId: "dog", breed: "beagle", krBreed: "비글" },
      { speciesId: "dog", breed: "chihuahua", krBreed: "치와와" },
      { speciesId: "dog", breed: "siberian husky", krBreed: "시베리안 허스키" },
      { speciesId: "dog", breed: "german shepherd", krBreed: "저먼 셰퍼드" },
      { speciesId: "dog", breed: "golden retriever", krBreed: "골든 리트리버" },
      { speciesId: "dog", breed: "labrador retriever", krBreed: "래브라도 리트리버" },
      { speciesId: "dog", breed: "rottweiler", krBreed: "로트와일러" },
      { speciesId: "dog", breed: "shih tzu", krBreed: "시츄" },
      { speciesId: "dog", breed: "doberman", krBreed: "도베르만" },
      { speciesId: "dog", breed: "boxer", krBreed: "복서" },
      { speciesId: "dog", breed: "corgi", krBreed: "웰시 코기" },
      { speciesId: "dog", breed: "yorkshire terrier", krBreed: "요크셔 테리어" },
      { speciesId: "dog", breed: "great dane", krBreed: "그레이트 데인" },
      { speciesId: "dog", breed: "akita", krBreed: "아키타" },
      { speciesId: "dog", breed: "basset hound", krBreed: "바셋 하운드" },
      { speciesId: "dog", breed: "shiba inu", krBreed: "시바 이누" },
      { speciesId: "cat", breed: "abyssinian", krBreed: "아비시니안" },
      { speciesId: "cat", breed: "american shorthair", krBreed: "아메리칸 숏헤어" },
      { speciesId: "cat", breed: "bengal", krBreed: "벵갈" },
      { speciesId: "cat", breed: "birman", krBreed: "버만" },
      { speciesId: "cat", breed: "british shorthair", krBreed: "브리티시 숏헤어" },
      { speciesId: "cat", breed: "exotic shorthair", krBreed: "엑조틱 숏헤어" },
      { speciesId: "cat", breed: "maine coon", krBreed: "메인쿤" },
      { speciesId: "cat", breed: "norwegian forest", krBreed: "노르웨이 숲" },
      { speciesId: "cat", breed: "oriental shorthair", krBreed: "오리엔탈 숏헤어" },
      { speciesId: "cat", breed: "persian", krBreed: "페르시안" },
      { speciesId: "cat", breed: "ragdoll", krBreed: "래그돌" },
      { speciesId: "cat", breed: "russian blue", krBreed: "러시안 블루" },
      { speciesId: "cat", breed: "scottish fold", krBreed: "스코티시 폴드" },
      { speciesId: "cat", breed: "siamese", krBreed: "샴" },
      { speciesId: "cat", breed: "siberian", krBreed: "시베리안" },
      { speciesId: "cat", breed: "singapura", krBreed: "싱가푸라" },
      { speciesId: "cat", breed: "somali", krBreed: "소말리" },
      { speciesId: "cat", breed: "sphynx", krBreed: "스핑크스" },
      { speciesId: "cat", breed: "tonkinese", krBreed: "통키니즈" },
      { speciesId: "cat", breed: "turkish angora", krBreed: "터키시 앙고라" },
      { speciesId: "cat", breed: "turkish van", krBreed: "터키시 반" }
    ]
  })
}

main().catch((error) => {
  console.log(error);
  process.exit(1);
}).finally(async () => {
  await prisma.$disconnect();
})