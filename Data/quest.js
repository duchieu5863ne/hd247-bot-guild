const a1 = [30,35,45,40,55,50]
const chat = a1[Math.floor(Math.random()*a1.length)]
const ht = Math.floor(Math.random()*4)+1
const reaction = ["984765261259370526","886893036712374283","886887441162719242","961097580304035881","1051814724179857408","887558252370477096","955738072304189480"]
const rc = reaction[Math.floor(Math.random()*reaction.length)]
module.exports = {
   Chat:{
    Name:`Chat ${chat} tin nhắn tại <#886819109835251809>`,
   Channel:"886819109835251809",
   Reward:{
        Normal:chat*1.5,
        Boost:chat*2.5,
        x2:chat*3
    },
  Amount:chat,
  T:"c1"
   },
   Confession:{
    Name:`Trả lời 1 confession bất kỳ tại <#1088771709378777158>`,
   Channel:"1088771709378777158",
   Reward:{
        Normal:30,
        Boost:30*1.5,
        x2:60
    },
  Amount:1,
  T:"c2"
   },
   Reaction:{
    Name:`Thả 1 reaction bất kỳ tại <#${rc}>`,
   Channel:rc,
   Reward:{
        Normal:10,
        Boost:15,
        x2:20
    },
  Amount:1 ,
  T:"r"
   },
      Story:{
    Name:`Đăng 1 story ít nhất 30 kí tự tại <#1021332351923523644>`,
   Channel:"1021332351923523644",
   Reward:{
        Normal:30,
        Boost:30*1.5,
        x2:60
    },
  Amount:1,
  T:"s"
   },
 Chat2:{
    Name:`Đăng 1 danh ngôn hợp lệ tại <#942971169156497448>`,
    Channel:"942971169156497448",
    Reward:{
         Normal:10,
         Boost:15,
         x2:20
     },
   Amount:1,
   T:"ht"
   },
  Story2:{
    Name:`Đăng 1 story có kèm theo ảnh tại <#1021332351923523644>`,
    Channel:"942971169156497448",
    Reward:{
         Normal:20,
         Boost:30,
         x2:40
     },
   Amount:1,
   T:"s2"
   },
  Story3:{
    Name:`Chat 1 tin nhắn lên 1 story bất kỳ trong <#1021332351923523644>`,
    Channel:"1021332351923523644",
    Reward:{
         Normal:10,
         Boost:10*1.5,
         x2:20
     },
     Amount:1,
     T:"s3"
  },
  Image:{
    Name:`Đăng 1 ảnh lên <#886887441162719242>`,
    Channel:"886887441162719242",
    Reward:{
         Normal:10,
         Boost:10*1.5,
         x2:20
     },
     Amount:1,
     T:"i"
  }
}