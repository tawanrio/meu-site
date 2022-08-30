<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Acessos ao Site</title>
   <link rel="stylesheet" href="assets/css/bootstrap.min.css">
   <link rel="stylesheet" href="assets/css/login.css">
</head>
<body>
   <section class="col-12 text-center">
      <h1 class="">ACESSOS AO SITE</h1>
   <table class="col-8 container table table-bordered table-striped table-hover">
			<thead class="bg-primary text-white">
				<th>IP</th>
				<th>ULTIMO ACESSO</th>
				<th>QNT ACESSO</th>
			</thead>
			<tbody>

            <?php
               $users = Database::getAll('count_access');
               foreach($users as $user){
                  ?>
                     <tr>
                        <td><?php echo $user['ip']; ?></a></td>
                        <td><?php echo getLastAccess($user['date']); ?></td>
                        <td><?php echo $user['access']; ?></td>
                     </tr>
                  <?php
               }
               ?>
                  <tr class="bg-primary text-white">
                     <th colspan='2'  >TOTAL</th>
                     <th><?php echo Database::getAcessAll(); ?></th>
                  </tr>
			</tbody>	
		</table>
   </section>

</body>
</html>