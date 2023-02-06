import {useQuery} from "@tanstack/react-query"


function About() {

const { isLoading} = useQuery({
 
})

if (isLoading) {
  return <div>Loading...</div>
}
// if (isError) {
//   return <div>Error! {error.message}</div>
// }

  return (
    <div >
        <h1>Top 10 dogs' stories</h1>
    <p>Man created dog, or dog created man, about 30,000 years ago somewhere in east Asia. Dogs witnessed us when we were still part very much part of the animal kingdom, marginal creatures foraging for a living, before we had stone tools, before we mastered agriculture, invented money, built cities, and polluted the earth. Dogs are like a first lover who knew us when: they know where we really come from, and who we really are.
They have shared our hearths and meals and affections for longer than any other animal. A 12,000-year-old grave in Israel contains the skeleton of a woman holding the skeleton of a puppy. We have even shared death with them. How could they not make their way into our imaginations?
Tommy Coope Hodge doing his best Tommy Cooper on Ramsgate Beach, Kent
National Dog Day: readers' pictures
While dogs have been bearing witness to our behaviour for 30,000 years, we have also been closely observing them. We are their first loves, too. We knew them when they were still wolves, before they tasted kibble, had their nails trimmed and their teeth brushed.
In my novel, Heroic Measures, one of the points of view belongs to Dorothy, a 12-year-old dachshund who stands 12 inches tall and weighs 10lb 2oz. Entering her consciousness seemed no different to me as a writer than visiting the minds of the older couple, Ruth and Alex, who have been Dorothys family since she was eight weeks old. Dorothys character is as idiosyncratic and individual as any human I have created.
Here are 10 favourite narratives told from a dogs point of view.</p>
<h6>1. The Odyssey by Homer</h6>
<p>Argos, Odysseuss loyal hound, is one of the first dogs in western literature. After waiting 20 years for his masters return, Argos must make a most painful decision. He realises that Odysseus is in disguise. If he greets his master, or if his master acknowledges him, Odysseus will be in mortal danger. Argos has to accept that after two decades of longing for this moment, he will only be rewarded with a glimpse of the man he loves.</p>
        </div>
  )
}

export default  About;