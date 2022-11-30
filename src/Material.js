import { Box} from '@mui/system';
import React from 'react'
import { Grid } from '@mui/material';

import {Icon} from '@mui/material';
import p1 from './img/p1.png';
import p2 from './img/p2.png';
import p3 from './img/p3.png';


import Typography from '@mui/material/Typography';
const Material = () => {
  return (
<Box sx={{width:"1500px",height:"700px", border:"4px solid skyblue"}}>
    <Typography variant='h5' sx={{fontFamily: "Work Sans",
      fontSize: "24px",
      fontWeight: 700,
      lineHeight: "32px",
      letterSpacing: "0.5px",
                             }}>
    FACTORY GIRL Berlin
    </Typography>
    <Grid container spacing={2} mt={4} sx={{border:"2px dotted skyblue"}}>



        <Grid item xs={4} >
    <Grid sx={{ width: "383px",height:"142px",border:" 1px solid #E0E0E0",
         padding:"24px",display:"flex",flexDirection:"column",
         justifyContent:"center",alignItems:"center",borderRadius:"8px",background:" #FFFFFF"}}>
        
        <Typography sx={{ mb: 1.5 ,height:"24px",width:"247px",position:"relative",left:"25px",top:"27px",fontWeight: 'bold'}}   color="text.dark">
          Posts
        </Typography>
        
        <Typography sx={{ fontSize: 14,position:"relative",right:"130px",top:"45px"}} color="text.secondary" gutterBottom>
          Total Posts
        </Typography>
        <Box style={{background:"#E0F7FF",borderRadius: "8px",
              position:"absolute",
              top:"110px",
              left:"65px"
    }}><Icon>
        <img src={p1} alt="error"/>
    </Icon></Box>
        
        <Typography sx={{ fontSize: 14,position:"relative",left:"40px",top:"19px" }} color="text.secondary" gutterBottom>
          Pending
        </Typography>
        <Typography sx={{ fontSize: 14,position:"relative",right:"150px",top:"15px",fontWeight: 'bold'}} color="text.dark" gutterBottom>
          400
        </Typography>
        <Typography sx={{ fontSize: 14,position:"relative",left:"30px",bottom:"11px",fontWeight: 'bold' }} color="text.dark" gutterBottom>
          28
        </Typography>
     
     

    </Grid>

        </Grid>
        

    <Grid item xs={4} >
    <Grid sx={{ width: "383px",height:"142px",border:" 1px solid #E0E0E0",
         padding:"24px",display:"flex",flexDirection:"column",
         justifyContent:"center",alignItems:"center",borderRadius:"8px",background:" #FFFFFF"}}>
        
        <Typography sx={{ mb: 1.5 ,height:"24px",width:"247px",position:"relative",
        left:"25px",top:"43px",fontWeight: 'bold'}}   color="text.dark">
          Reviews
        </Typography>
        
        <Typography sx={{ fontSize: 14,position:"relative",
        right:"130px",top:"60px"}} color="text.secondary" gutterBottom>
          Total Reviews
        </Typography>
        <Box style={{background:"#E0F7FF",borderRadius: "8px",
           position:"relative",
           bottom:"22px",
           right:"120px" 
    }}>
        <Icon>
        <img src={p2} alt="error"/>
    </Icon></Box>
        
        <Typography sx={{ fontSize: 14,
            position:"relative",left:"40px" ,top:"10px" }} color="text.secondary" gutterBottom>
          Ratings
        </Typography>
        <Typography sx={{ fontSize: 14,position:"relative",
        right:"150px",fontWeight: 'bold'}} color="text.dark" gutterBottom>
          240
        </Typography>
        <Typography sx={{ fontSize: 14,position:"relative",
        left:"30px",bottom:"23px",fontWeight: 'bold' }} color="text.dark" gutterBottom>
          4.86
        </Typography>
     
     

    </Grid>

        </Grid>


        
        <Grid item xs={4} >
    <Grid sx={{ width: "383px",height:"142px",border:" 1px solid #E0E0E0",
         padding:"24px",display:"flex",flexDirection:"column",
         justifyContent:"center",alignItems:"center",borderRadius:"8px",background:" #FFFFFF"}}>
        
        <Typography sx={{ mb: 1.5 ,height:"24px",width:"247px",position:"relative", left:"25px",top:"43px",fontWeight: 'bold'}}   color="text.dark">
          Tasks
        </Typography>
        
        <Typography sx={{ fontSize: 14,position:"relative",right:"130px",top:"60px"}} color="text.secondary" gutterBottom>
          Total Tasks
        </Typography>
        <Box style={{background:"#E0F7FF",borderRadius: "8px",
             position:"relative",
             bottom:"22px",
             right:"120px" 
    }}>
        <Icon>
        <img src={p3} alt="error"/>
    </Icon></Box>
        
        <Typography sx={{ fontSize: 14,position:"relative",left:"40px" ,top:"10px" }} color="text.secondary" gutterBottom>
          open
        </Typography>
        <Typography sx={{ fontSize: 14,position:"relative", right:"150px",fontWeight: 'bold'}} color="text.dark" gutterBottom>
          45
        </Typography>
        <Typography sx={{ fontSize: 14,position:"relative", left:"30px",bottom:"23px",fontWeight: 'bold' }} color="text.dark" gutterBottom>
          6
        </Typography>
     
     

    </Grid>

        </Grid>






    </Grid>

    <Typography variant='h5' sx={{fontFamily: "Work Sans",
      fontSize: "24px",
      fontWeight: 700,
      lineHeight: "32px",
      letterSpacing: "0.5px",
                             }}>
    FACTORY GIRL Amsterdam
    </Typography>

    <Grid container spacing={2} mt={4} sx={{border:"2px dotted skyblue"}}>



<Grid item xs={4} >
<Grid sx={{ width: "383px",height:"142px",border:" 1px solid #E0E0E0",
 padding:"24px",display:"flex",flexDirection:"column",
 justifyContent:"center",alignItems:"center",borderRadius:"8px",background:" #FFFFFF"}}>

<Typography sx={{ mb: 1.5 ,height:"24px",width:"247px",position:"relative",left:"25px",top:"27px",fontWeight: 'bold'}}   color="text.dark">
  Posts
</Typography>

<Typography sx={{ fontSize: 14,position:"relative",right:"130px",top:"45px"}} color="text.secondary" gutterBottom>
  Total Posts
</Typography>
<Box style={{background:"#E0F7FF",borderRadius: "8px",
      
}}><Icon>
<img src={p1} alt="error"/>
</Icon></Box>

<Typography sx={{ fontSize: 14,position:"relative",left:"40px",top:"19px" }} color="text.secondary" gutterBottom>
  Pending
</Typography>
<Typography sx={{ fontSize: 14,position:"relative",right:"150px",top:"15px",fontWeight: 'bold'}} color="text.dark" gutterBottom>
  400
</Typography>
<Typography sx={{ fontSize: 14,position:"relative",left:"30px",bottom:"11px",fontWeight: 'bold' }} color="text.dark" gutterBottom>
  28
</Typography>



</Grid>

</Grid>


<Grid item xs={4} >
<Grid sx={{ width: "383px",height:"142px",border:" 1px solid #E0E0E0",
 padding:"24px",display:"flex",flexDirection:"column",
 justifyContent:"center",alignItems:"center",borderRadius:"8px",background:" #FFFFFF"}}>

<Typography sx={{ mb: 1.5 ,height:"24px",width:"247px",position:"relative",
left:"25px",top:"43px",fontWeight: 'bold'}}   color="text.dark">
  Reviews
</Typography>

<Typography sx={{ fontSize: 14,position:"relative", right:"130px",top:"60px"}} color="text.secondary" gutterBottom>
  Total Reviews
</Typography>
<Box style={{background:"#E0F7FF",borderRadius: "8px",
      position:"relative",
      bottom:"22px",
      right:"120px" 
}}>
<Icon>
<img src={p2} alt="error"/>
</Icon></Box>

<Typography sx={{ fontSize: 14,position:"relative",left:"40px" ,top:"10px"}} color="text.secondary" gutterBottom>
  Ratings
</Typography>
<Typography sx={{ fontSize: 14,position:"relative", right:"150px",fontWeight: 'bold'}} color="text.dark" gutterBottom>
  240
</Typography>
<Typography sx={{ fontSize: 14,position:"relative",left:"30px",bottom:"23px",fontWeight: 'bold' }} color="text.dark" gutterBottom>
  4.86
</Typography>



</Grid>

</Grid>



<Grid item xs={4} >
<Grid sx={{ width: "383px",height:"142px",border:" 1px solid #E0E0E0",
 padding:"24px",display:"flex",flexDirection:"column",
 justifyContent:"center",alignItems:"center",borderRadius:"8px",background:" #FFFFFF"}}>

<Typography sx={{ mb: 1.5 ,height:"24px",width:"247px",position:"relative",left:"25px",top:"43px",fontWeight: 'bold'}}   color="text.dark">
  Tasks
</Typography>

<Typography sx={{ fontSize: 14,position:"relative",right:"130px",top:"60px"}} color="text.secondary" gutterBottom>
  Total Tasks
</Typography>
<Box style={{background:"#E0F7FF",borderRadius: "8px",
     position:"relative",
     bottom:"22px",
     right:"120px"  
}}>
<Icon>
<img src={p3} alt="error"/>
</Icon></Box>

<Typography sx={{ fontSize: 14,position:"relative",left:"40px",top:"9px" }} color="text.secondary" gutterBottom>
  open
</Typography>
<Typography sx={{ fontSize: 14,position:"relative",right:"150px",top:"1px",fontWeight: 'bold'}} color="text.dark" gutterBottom>
  45
</Typography>
<Typography sx={{ fontSize: 14,position:"relative",left:"30px",bottom:"25px",fontWeight: 'bold' }} color="text.dark" gutterBottom>
  6
</Typography>



</Grid>

</Grid>






</Grid>

    <Typography variant='h5' sx={{fontFamily: "Work Sans",
      fontSize: "24px",
      fontWeight: 700,
      lineHeight: "32px",
      letterSpacing: "0.5px",
                             }}>
    FACTORY GIRL Norway
    </Typography>
    <Grid container spacing={2} mt={4} sx={{border:"2px dotted skyblue"}}>



<Grid item xs={4} >
<Grid sx={{ width: "383px",height:"142px",border:" 1px solid #E0E0E0",
 padding:"24px",display:"flex",flexDirection:"column",
 justifyContent:"center",alignItems:"center",borderRadius:"8px",background:" #FFFFFF"}}>

<Typography sx={{ mb: 1.5 ,height:"24px",width:"247px",position:"relative",left:"25px",top:"27px",fontWeight: 'bold'}}   color="text.dark">
  Posts
</Typography>

<Typography sx={{ fontSize: 14,position:"relative",right:"130px",top:"45px"}} color="text.secondary" gutterBottom>
  Total Posts
</Typography>
<Box style={{background:"#E0F7FF",borderRadius: "8px",
    
}}><Icon>
<img src={p1} alt="error"/>
</Icon></Box>

<Typography sx={{ fontSize: 14,position:"relative",left:"40px",top:"19px" }} color="text.secondary" gutterBottom>
  Pending
</Typography>
<Typography sx={{ fontSize: 14,position:"relative",right:"150px",top:"15px",fontWeight: 'bold'}} color="text.dark" gutterBottom>
  400
</Typography>
<Typography sx={{ fontSize: 14,position:"relative",left:"30px",bottom:"11px",fontWeight: 'bold' }} color="text.dark" gutterBottom>
  28
</Typography>



</Grid>

</Grid>


<Grid item xs={4} >
<Grid sx={{ width: "383px",height:"142px",border:" 1px solid #E0E0E0",
 padding:"24px",display:"flex",flexDirection:"column",
 justifyContent:"center",alignItems:"center",borderRadius:"8px",background:" #FFFFFF"}}>

<Typography sx={{ mb: 1.5 ,height:"24px",width:"247px",position:"relative",
left:"25px",top:"43px",fontWeight: 'bold'}}   color="text.dark">
  Reviews
</Typography>

<Typography sx={{ fontSize: 14,position:"relative", right:"130px",top:"60px"}} color="text.secondary" gutterBottom>
  Total Reviews
</Typography>
<Box style={{background:"#E0F7FF",borderRadius: "8px",
      position:"relative",
      bottom:"22px",
      right:"120px" 
}}>
<Icon>
<img src={p2} alt="error"/>
</Icon></Box>

<Typography sx={{ fontSize: 14,position:"relative",left:"40px" ,top:"10px" }} color="text.secondary" gutterBottom>
  Ratings
</Typography>
<Typography sx={{ fontSize: 14,position:"relative", right:"150px",fontWeight: 'bold'}} color="text.dark" gutterBottom>
  240
</Typography>
<Typography sx={{ fontSize: 14,position:"relative",left:"30px",bottom:"23px",fontWeight: 'bold' }} color="text.dark" gutterBottom>
  4.86
</Typography>



</Grid>

</Grid>



<Grid item xs={4} >
<Grid sx={{ width: "383px",height:"142px",border:" 1px solid #E0E0E0",
 padding:"24px",display:"flex",flexDirection:"column",
 justifyContent:"center",alignItems:"center",borderRadius:"8px",background:" #FFFFFF"}}>

<Typography sx={{ mb: 1.5 ,height:"24px",width:"247px",position:"relative",left:"25px",top:"43px",fontWeight: 'bold'}}   color="text.dark">
  Tasks
</Typography>

<Typography sx={{ fontSize: 14,position:"relative",right:"130px",top:"65px"}} color="text.secondary" gutterBottom>
  Total Tasks
</Typography>
<Box style={{background:"#E0F7FF",borderRadius: "8px",
      position:"relative",
      bottom:"22px",
      right:"120px" 
}}>
<Icon>
<img src={p3} alt="error"/>
</Icon></Box>

<Typography sx={{ fontSize: 14,position:"relative",left:"40px",top:"14px"  }} color="text.secondary" gutterBottom>
  open
</Typography>
<Typography sx={{ fontSize: 14,position:"relative",right:"150px",top:"3px",fontWeight: 'bold'}} color="text.dark" gutterBottom>
  45
</Typography>
<Typography sx={{ fontSize: 14,position:"relative",left:"30px",bottom:"23px",fontWeight: 'bold' }} color="text.dark" gutterBottom>
  6
</Typography>



</Grid>

</Grid>






</Grid>

</Box>


  )
  
}

export default Material;