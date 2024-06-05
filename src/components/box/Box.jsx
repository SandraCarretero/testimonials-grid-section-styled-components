import { Profile, StyledCard, StyledImgBg, StyledName, StyledPrincipalText, StyledProfession, StyledProfile, StyledProfileInfo, StyledProfilePhoto, StyledSecondaryText } from "./box.styles"

const Box =()=>{
    return (
        <>
         <StyledCard $grid='first' $bgcolor='#733FC8'>
        <Profile>
        <StyledImgBg>
                <img src="bg-pattern-quotation.svg" alt="" />
            </StyledImgBg>
            <StyledProfile>
            <StyledProfilePhoto $borderColor='#A775F1'>
                 <img src="image-daniel.jpg" alt="" /> 
            </StyledProfilePhoto>
            <StyledProfileInfo>
              <StyledName>Daniel Cliffors</StyledName>
            <StyledProfession>Verified Graduate</StyledProfession>  
            </StyledProfileInfo>
            </StyledProfile>
            
            <StyledPrincipalText $color='white'>I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.</StyledPrincipalText>
            <StyledSecondaryText $color='#CFCFCF'>“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the  best - and most grueling - time of my life. Since completing the course, I’ve  successfully switched careers, working as a Software Engineer at a VR startup. ”</StyledSecondaryText>
        </Profile>
    </StyledCard>
    <StyledCard $grid='second' $bgcolor='#48556A'>
        <Profile>
            <StyledProfile>
            <StyledProfilePhoto $borderColor='#48556A'>
                 <img src="image-jonathan.jpg" alt="" /> 
            </StyledProfilePhoto>
            <StyledProfileInfo>
              <StyledName>Jonathan Walters</StyledName>
            <StyledProfession> Verified Graduate</StyledProfession>  
            </StyledProfileInfo>
            </StyledProfile>
            
            <StyledPrincipalText $color='white'>The team was very supportive and kept me motivated</StyledPrincipalText>
            <StyledSecondaryText $color='#CFCFCF'>“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. “</StyledSecondaryText>
        </Profile>
    </StyledCard>
    <StyledCard $grid='third' $bgcolor='#FFFFFF'>
        <Profile>
            
            <StyledProfile>
            <StyledProfilePhoto $borderColor='#FFFFFF'>
                 <img src="image-kira.jpg" alt="" /> 
            </StyledProfilePhoto>
            <StyledProfileInfo>
              <StyledName $color="#48556A">Kira Whittle</StyledName>
            <StyledProfession $color='#48556A'> Verified Graduate</StyledProfession>  
            </StyledProfileInfo>
            </StyledProfile>
            
            <StyledPrincipalText $color='#48556A'>Such a life-changing experience. Highly recommended!</StyledPrincipalText>
            <StyledSecondaryText $color='#48556A'>“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!  ”</StyledSecondaryText>
        </Profile>
    </StyledCard>
    <StyledCard $grid='fourth' $bgcolor='#FFFFFF'>
        <Profile>
            <StyledProfile>
            <StyledProfilePhoto $borderColor='#FFFFFF'>
                 <img src="image-jeanette.jpg" alt="" /> 
            </StyledProfilePhoto>
            <StyledProfileInfo>
              <StyledName $color="#48556A">Jeanette Harmon</StyledName>
            <StyledProfession $color='#48556A'> Verified Graduate</StyledProfession>  
            </StyledProfileInfo>
            </StyledProfile>
            
            <StyledPrincipalText $color='#48556A'>An overall wonderful and rewarding experience</StyledPrincipalText>
            <StyledSecondaryText $color='#48556A'>“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”</StyledSecondaryText>
        </Profile>
    </StyledCard>
    <StyledCard $grid='five' $bgcolor='#18202C'>
        <Profile>
            <StyledProfile>
            <StyledProfilePhoto $borderColor='#FFFFFF'>
                 <img src="image-patrick.jpg" alt="" /> 
            </StyledProfilePhoto>
            <StyledProfileInfo>
              <StyledName $color="#FFFFFF">Patrick Abrams</StyledName>
            <StyledProfession $color='#FFFFFF'>Verified Graduate</StyledProfession>  
            </StyledProfileInfo>
            </StyledProfile>
            
            <StyledPrincipalText $color='#FFFFFF'>Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.</StyledPrincipalText>
            <StyledSecondaryText $color='#FFFFFF'>“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people.  ”</StyledSecondaryText>
        </Profile>
    </StyledCard>
          
        </>
    )
   
}
export default Box